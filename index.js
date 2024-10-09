// const
sampleValue = String.raw`{
	"id": "f049b644-8339-4ff7-b4ed-bb6af2540e09",
	"name": "UAT_General_Transaction Copy",
	"timestamp": "2024-10-08T07:17:37.280Z",
	"collection_id": "17341249-756238e4-ba53-44af-a9fa-12acc98ea094",
	"folder_id": 0,
	"environment_id": "17341249-de4fac4e-286b-47be-a295-4c65405e1111",
	"totalPass": 360,
	"delay": 0,
	"persist": true,
	"status": "finished",
	"startedAt": "2024-10-08T07:16:41.385Z",
	"totalFail": 0,
	"results": [
		{
			"id": "a3e5ae06-b8ca-46ef-a9bc-6ec48281d982",
			"name": "R2-DEAL INQUIRY UAT",
			"url": "https://api-dfx-uat.apps.ocpdevgra.dti.co.id/api/deal/inquiry",
			"time": 60,
			"responseCode": {
				"code": 200,
				"name": "OK"
			},
			"tests": {
				"{\"deal_id\":\"202410080360\",\"identity_type\":\"3\",\"identity_number\":\"202410080360\",\"buy_currency_code\":\"IDR\",\"buy_amount\":71334875142.74,\"sell_currency_code\":\"KRW\",\"sell_amount\":5612500011.23,\"rate\":12.71,\"special_transaction\":\"01\",\"transaction_type\":\"S\",\"maturity_date\":\"2024-10-10\",\"transaction_date\":\"2024-10-08 12:34:56\",\"flag_underlying_document\":\"Y\",\"instrument_type\":\"SWAP\",\"channel_id\":\"JVA\"}|{\"error_schema\":{\"error_code\":\"TRE-00-000\",\"error_message\":{\"indonesian\":\"Sukses\",\"english\":\"Success\"}},\"output_schema\":{\"request_id\":\"435f432adc7f6f6b\",\"data\":{\"deal_id\":\"202410080360\",\"identity_type\":\"3\",\"identity_number\":\"202410080360\",\"rule_category\":\"KRW_IDR_01_S_SWAP\",\"accumulation_rule\":2,\"accumulation_group\":null,\"accumulation_amount\":0,\"flag_underlying_document\":\"Y\",\"threshold\":5000000,\"period\":\"202410\"}}}|TRE-00-000|Sukses|Success|435f432adc7f6f6b|202410080360|3|202410080360|KRW_IDR_01_S_SWAP|2|null|0|Y|5000000|202410": true
			},
			"testPassFailCounts": {
				"{\"deal_id\":\"202410080001\",\"identity_type\":\"3\",\"identity_number\":\"202410080001\",\"buy_currency_code\":\"THB\",\"buy_amount\":6585999.68,\"sell_currency_code\":\"IDR\",\"sell_amount\":2853384361.36,\"rate\":433.25,\"special_transaction\":\"01\",\"transaction_type\":\"B\",\"maturity_date\":\"2024-10-08\",\"transaction_date\":\"2024-10-08 12:34:56\",\"flag_underlying_document\":\"N\",\"instrument_type\":\"TODAY\",\"channel_id\":\"RET\"}|{\"error_schema\":{\"error_code\":\"TRE-00-000\",\"error_message\":{\"indonesian\":\"Sukses\",\"english\":\"Success\"}},\"output_schema\":{\"request_id\":\"4d4cca18a0945ecd\",\"data\":{\"deal_id\":\"202410080001\",\"identity_type\":\"3\",\"identity_number\":\"202410080001\",\"rule_category\":\"THB_IDR_01_B\",\"accumulation_rule\":2,\"accumulation_group\":null,\"accumulation_amount\":0,\"flag_underlying_document\":\"N\",\"threshold\":200000,\"period\":\"202410\"}}}|TRE-00-000|Sukses|Success|4d4cca18a0945ecd|202410080001|3|202410080001|THB_IDR_01_B|2|null|0|N|200000|202410": {
					"pass": 1,
					"fail": 0
				},
				"{\"deal_id\":\"202410080002\",\"identity_type\":\"3\",\"identity_number\":\"202410080002\",\"buy_currency_code\":\"THB\",\"buy_amount\":6586000,\"sell_currency_code\":\"IDR\",\"sell_amount\":2853384500,\"rate\":433.25,\"special_transaction\":\"01\",\"transaction_type\":\"B\",\"maturity_date\":\"2024-10-08\",\"transaction_date\":\"2024-10-08 12:34:56\",\"flag_underlying_document\":\"N\",\"instrument_type\":\"TODAY\",\"channel_id\":\"JVA\"}|{\"error_schema\":{\"error_code\":\"TRE-00-000\",\"error_message\":{\"indonesian\":\"Sukses\",\"english\":\"Success\"}},\"output_schema\":{\"request_id\":\"ca8ed8113f8c04c0\",\"data\":{\"deal_id\":\"202410080002\",\"identity_type\":\"3\",\"identity_number\":\"202410080002\",\"rule_category\":\"THB_IDR_01_B\",\"accumulation_rule\":2,\"accumulation_group\":null,\"accumulation_amount\":0,\"flag_underlying_document\":\"Y\",\"threshold\":200000,\"period\":\"202410\"}}}|TRE-00-000|Sukses|Success|ca8ed8113f8c04c0|202410080002|3|202410080002|THB_IDR_01_B|2|null|0|Y|200000|202410": {
					"pass": 1,
					"fail": 0
				},
				"{\"deal_id\":\"202410080003\",\"identity_type\":\"3\",\"identity_number\":\"202410080003\",\"buy_currency_code\":\"THB\",\"buy_amount\":6586000.33,\"sell_currency_code\":\"IDR\",\"sell_amount\":2853384642.98,\"rate\":433.25,\"special_transaction\":\"01\",\"transaction_type\":\"B\",\"maturity_date\":\"2024-10-08\",\"transaction_date\":\"2024-10-08 12:34:56\",\"flag_underlying_document\":\"N\",\"instrument_type\":\"TODAY\",\"channel_id\":\"MX3\"}|{\"error_schema\":{\"error_code\":\"TRE-00-000\",\"error_message\":{\"indonesian\":\"Sukses\",\"english\":\"Success\"}},\"output_schema\":{\"request_id\":\"b2c05f8c954eb420\",\"data\":{\"deal_id\":\"202410080003\",\"identity_type\":\"3\",\"identity_number\":\"202410080003\",\"rule_category\":\"THB_IDR_01_B\",\"accumulation_rule\":2,\"accumulation_group\":null,\"accumulation_amount\":0,\"flag_underlying_document\":\"Y\",\"threshold\":200000,\"period\":\"202410\"}}}|TRE-00-000|Sukses|Success|b2c05f8c954eb420|202410080003|3|202410080003|THB_IDR_01_B|2|null|0|Y|200000|202410": {
					"pass": 1,
					"fail": 0
				},
				"{\"deal_id\":\"202410080004\",\"identity_type\":\"3\",\"identity_number\":\"202410080004\",\"buy_currency_code\":\"THB\",\"buy_amount\":6585999.68,\"sell_currency_code\":\"IDR\",\"sell_amount\":2853384361.36,\"rate\":433.25,\"special_transaction\":\"01\",\"transaction_type\":\"B\",\"maturity_date\":\"2024-10-08\",\"transaction_date\":\"2024-10-08 12:34:56\",\"flag_underlying_document\":\"Y\",\"instrument_type\":\"TODAY\",\"channel_id\":\"JVA\"}|{\"error_schema\":{\"error_code\":\"TRE-00-000\",\"error_message\":{\"indonesian\":\"Sukses\",\"english\":\"Success\"}},\"output_schema\":{\"request_id\":\"9a442ba487a9b05d\",\"data\":{\"deal_id\":\"202410080004\",\"identity_type\":\"3\",\"identity_number\":\"202410080004\",\"rule_category\":\"THB_IDR_01_B\",\"accumulation_rule\":2,\"accumulation_group\":null,\"accumulation_amount\":0,\"flag_underlying_document\":\"Y\",\"threshold\":200000,\"period\":\"202410\"}}}|TRE-00-000|Sukses|Success|9a442ba487a9b05d|202410080004|3|202410080004|THB_IDR_01_B|2|null|0|Y|200000|202410": {
					"pass": 1,
					"fail": 0
				},
				"{\"deal_id\":\"202410080005\",\"identity_type\":\"3\",\"identity_number\":\"202410080005\",\"buy_currency_code\":\"THB\",\"buy_amount\":6586000,\"sell_currency_code\":\"IDR\",\"sell_amount\":2853384500,\"rate\":433.25,\"special_transaction\":\"01\",\"transaction_type\":\"B\",\"maturity_date\":\"2024-10-08\",\"transaction_date\":\"2024-10-08 12:34:56\",\"flag_underlying_document\":\"Y\",\"instrument_type\":\"TODAY\",\"channel_id\":\"MX3\"}|{\"error_schema\":{\"error_code\":\"TRE-00-000\",\"error_message\":{\"indonesian\":\"Sukses\",\"english\":\"Success\"}},\"output_schema\":{\"request_id\":\"c8281f0439f2dbf8\",\"data\":{\"deal_id\":\"202410080005\",\"identity_type\":\"3\",\"identity_number\":\"202410080005\",\"rule_category\":\"THB_IDR_01_B\",\"accumulation_rule\":2,\"accumulation_group\":null,\"accumulation_amount\":0,\"flag_underlying_document\":\"Y\",\"threshold\":200000,\"period\":\"202410\"}}}|TRE-00-000|Sukses|Success|c8281f0439f2dbf8|202410080005|3|202410080005|THB_IDR_01_B|2|null|0|Y|200000|202410": {
					"pass": 1,
					"fail": 0
				},
				"{\"deal_id\":\"202410080006\",\"identity_type\":\"3\",\"identity_number\":\"202410080006\",\"buy_currency_code\":\"THB\",\"buy_amount\":6586000.33,\"sell_currency_code\":\"IDR\",\"sell_amount\":2853384642.98,\"rate\":433.25,\"special_transaction\":\"01\",\"transaction_type\":\"B\",\"maturity_date\":\"2024-10-08\",\"transaction_date\":\"2024-10-08 12:34:56\",\"flag_underlying_document\":\"Y\",\"instrument_type\":\"TODAY\",\"channel_id\":\"RET\"}|{\"error_schema\":{\"error_code\":\"TRE-00-000\",\"error_message\":{\"indonesian\":\"Sukses\",\"english\":\"Success\"}},\"output_schema\":{\"request_id\":\"2482d9cfc6c1db09\",\"data\":{\"deal_id\":\"202410080006\",\"identity_type\":\"3\",\"identity_number\":\"202410080006\",\"rule_category\":\"THB_IDR_01_B\",\"accumulation_rule\":2,\"accumulation_group\":null,\"accumulation_amount\":0,\"flag_underlying_document\":\"Y\",\"threshold\":200000,\"period\":\"202410\"}}}|TRE-00-000|Sukses|Success|2482d9cfc6c1db09|202410080006|3|202410080006|THB_IDR_01_B|2|null|0|Y|200000|202410": {
					"pass": 1,
					"fail": 0
				},
				"{\"deal_id\":\"202410080007\",\"identity_type\":\"3\",\"identity_number\":\"202410080007\",\"buy_currency_code\":\"THB\",\"buy_amount\":6585999.68,\"sell_currency_code\":\"IDR\",\"sell_amount\":2853384361.36,\"rate\":433.25,\"special_transaction\":\"01\",\"transaction_type\":\"B\",\"maturity_date\":\"2024-10-09\",\"transaction_date\":\"2024-10-08 12:34:56\",\"flag_underlying_document\":\"N\",\"instrument_type\":\"TOM\",\"channel_id\":\"MX3\"}|{\"error_schema\":{\"error_code\":\"TRE-00-000\",\"error_message\":{\"indonesian\":\"Sukses\",\"english\":\"Success\"}},\"output_schema\":{\"request_id\":\"d832bc8a23cc4643\",\"data\":{\"deal_id\":\"202410080007\",\"identity_type\":\"3\",\"identity_number\":\"202410080007\",\"rule_category\":\"THB_IDR_01_B\",\"accumulation_rule\":2,\"accumulation_group\":null,\"accumulation_amount\":0,\"flag_underlying_document\":\"N\",\"threshold\":200000,\"period\":\"202410\"}}}|TRE-00-000|Sukses|Success|d832bc8a23cc4643|202410080007|3|202410080007|THB_IDR_01_B|2|null|0|N|200000|202410": {
					"pass": 1,
					"fail": 0
				},
				"{\"deal_id\":\"202410080008\",\"identity_type\":\"3\",\"identity_number\":\"202410080008\",\"buy_currency_code\":\"THB\",\"buy_amount\":6586000,\"sell_currency_code\":\"IDR\",\"sell_amount\":2853384500,\"rate\":433.25,\"special_transaction\":\"01\",\"transaction_type\":\"B\",\"maturity_date\":\"2024-10-09\",\"transaction_date\":\"2024-10-08 12:34:56\",\"flag_underlying_document\":\"N\",\"instrument_type\":\"TOM\",\"channel_id\":\"RET\"}|{\"error_schema\":{\"error_code\":\"TRE-00-000\",\"error_message\":{\"indonesian\":\"Sukses\",\"english\":\"Success\"}},\"output_schema\":{\"request_id\":\"02cb5667b4ba3d97\",\"data\":{\"deal_id\":\"202410080008\",\"identity_type\":\"3\",\"identity_number\":\"202410080008\",\"rule_category\":\"THB_IDR_01_B\",\"accumulation_rule\":2,\"accumulation_group\":null,\"accumulation_amount\":0,\"flag_underlying_document\":\"Y\",\"threshold\":200000,\"period\":\"202410\"}}}|TRE-00-000|Sukses|Success|02cb5667b4ba3d97|202410080008|3|202410080008|THB_IDR_01_B|2|null|0|Y|200000|202410": {
					"pass": 1,
					"fail": 0
				},
				"{\"deal_id\":\"202410080009\",\"identity_type\":\"3\",\"identity_number\":\"202410080009\",\"buy_currency_code\":\"THB\",\"buy_amount\":6586000.33,\"sell_currency_code\":\"IDR\",\"sell_amount\":2853384642.98,\"rate\":433.25,\"special_transaction\":\"01\",\"transaction_type\":\"B\",\"maturity_date\":\"2024-10-09\",\"transaction_date\":\"2024-10-08 12:34:56\",\"flag_underlying_document\":\"N\",\"instrument_type\":\"TOM\",\"channel_id\":\"JVA\"}|{\"error_schema\":{\"error_code\":\"TRE-00-000\",\"error_message\":{\"indonesian\":\"Sukses\",\"english\":\"Success\"}},\"output_schema\":{\"request_id\":\"37e083e2921328cf\",\"data\":{\"deal_id\":\"202410080009\",\"identity_type\":\"3\",\"identity_number\":\"202410080009\",\"rule_category\":\"THB_IDR_01_B\",\"accumulation_rule\":2,\"accumulation_group\":null,\"accumulation_amount\":0,\"flag_underlying_document\":\"Y\",\"threshold\":200000,\"period\":\"202410\"}}}|TRE-00-000|Sukses|Success|37e083e2921328cf|202410080009|3|202410080009|THB_IDR_01_B|2|null|0|Y|200000|202410": {
					"pass": 1,
					"fail": 0
				},
				"{\"deal_id\":\"202410080010\",\"identity_type\":\"3\",\"identity_number\":\"202410080010\",\"buy_currency_code\":\"THB\",\"buy_amount\":6585999.68,\"sell_currency_code\":\"IDR\",\"sell_amount\":2853384361.36,\"rate\":433.25,\"special_transaction\":\"01\",\"transaction_type\":\"B\",\"maturity_date\":\"2024-10-09\",\"transaction_date\":\"2024-10-08 12:34:56\",\"flag_underlying_document\":\"Y\",\"instrument_type\":\"TOM\",\"channel_id\":\"RET\"}|{\"error_schema\":{\"error_code\":\"TRE-00-000\",\"error_message\":{\"indonesian\":\"Sukses\",\"english\":\"Success\"}},\"output_schema\":{\"request_id\":\"3590bc3a096d531d\",\"data\":{\"deal_id\":\"202410080010\",\"identity_type\":\"3\",\"identity_number\":\"202410080010\",\"rule_category\":\"THB_IDR_01_B\",\"accumulation_rule\":2,\"accumulation_group\":null,\"accumulation_amount\":0,\"flag_underlying_document\":\"Y\",\"threshold\":200000,\"period\":\"202410\"}}}|TRE-00-000|Sukses|Success|3590bc3a096d531d|202410080010|3|202410080010|THB_IDR_01_B|2|null|0|Y|200000|202410": {
					"pass": 1,
					"fail": 0
				}
			},
			"times": [
				127,
				61,
				56,
				67,
				73,
				81,
				57,
				46,
				52,
				45
			],
			"allTests": [
				{
					"{\"deal_id\":\"202410080001\",\"identity_type\":\"3\",\"identity_number\":\"202410080001\",\"buy_currency_code\":\"THB\",\"buy_amount\":6585999.68,\"sell_currency_code\":\"IDR\",\"sell_amount\":2853384361.36,\"rate\":433.25,\"special_transaction\":\"01\",\"transaction_type\":\"B\",\"maturity_date\":\"2024-10-08\",\"transaction_date\":\"2024-10-08 12:34:56\",\"flag_underlying_document\":\"N\",\"instrument_type\":\"TODAY\",\"channel_id\":\"RET\"}|{\"error_schema\":{\"error_code\":\"TRE-00-000\",\"error_message\":{\"indonesian\":\"Sukses\",\"english\":\"Success\"}},\"output_schema\":{\"request_id\":\"4d4cca18a0945ecd\",\"data\":{\"deal_id\":\"202410080001\",\"identity_type\":\"3\",\"identity_number\":\"202410080001\",\"rule_category\":\"THB_IDR_01_B\",\"accumulation_rule\":2,\"accumulation_group\":null,\"accumulation_amount\":0,\"flag_underlying_document\":\"N\",\"threshold\":200000,\"period\":\"202410\"}}}|TRE-00-000|Sukses|Success|4d4cca18a0945ecd|202410080001|3|202410080001|THB_IDR_01_B|2|null|0|N|200000|202410": true
				},
				{
					"{\"deal_id\":\"202410080002\",\"identity_type\":\"3\",\"identity_number\":\"202410080002\",\"buy_currency_code\":\"THB\",\"buy_amount\":6586000,\"sell_currency_code\":\"IDR\",\"sell_amount\":2853384500,\"rate\":433.25,\"special_transaction\":\"01\",\"transaction_type\":\"B\",\"maturity_date\":\"2024-10-08\",\"transaction_date\":\"2024-10-08 12:34:56\",\"flag_underlying_document\":\"N\",\"instrument_type\":\"TODAY\",\"channel_id\":\"JVA\"}|{\"error_schema\":{\"error_code\":\"TRE-00-000\",\"error_message\":{\"indonesian\":\"Sukses\",\"english\":\"Success\"}},\"output_schema\":{\"request_id\":\"ca8ed8113f8c04c0\",\"data\":{\"deal_id\":\"202410080002\",\"identity_type\":\"3\",\"identity_number\":\"202410080002\",\"rule_category\":\"THB_IDR_01_B\",\"accumulation_rule\":2,\"accumulation_group\":null,\"accumulation_amount\":0,\"flag_underlying_document\":\"Y\",\"threshold\":200000,\"period\":\"202410\"}}}|TRE-00-000|Sukses|Success|ca8ed8113f8c04c0|202410080002|3|202410080002|THB_IDR_01_B|2|null|0|Y|200000|202410": true
				},
				{
					"{\"deal_id\":\"202410080003\",\"identity_type\":\"3\",\"identity_number\":\"202410080003\",\"buy_currency_code\":\"THB\",\"buy_amount\":6586000.33,\"sell_currency_code\":\"IDR\",\"sell_amount\":2853384642.98,\"rate\":433.25,\"special_transaction\":\"01\",\"transaction_type\":\"B\",\"maturity_date\":\"2024-10-08\",\"transaction_date\":\"2024-10-08 12:34:56\",\"flag_underlying_document\":\"N\",\"instrument_type\":\"TODAY\",\"channel_id\":\"MX3\"}|{\"error_schema\":{\"error_code\":\"TRE-00-000\",\"error_message\":{\"indonesian\":\"Sukses\",\"english\":\"Success\"}},\"output_schema\":{\"request_id\":\"b2c05f8c954eb420\",\"data\":{\"deal_id\":\"202410080003\",\"identity_type\":\"3\",\"identity_number\":\"202410080003\",\"rule_category\":\"THB_IDR_01_B\",\"accumulation_rule\":2,\"accumulation_group\":null,\"accumulation_amount\":0,\"flag_underlying_document\":\"Y\",\"threshold\":200000,\"period\":\"202410\"}}}|TRE-00-000|Sukses|Success|b2c05f8c954eb420|202410080003|3|202410080003|THB_IDR_01_B|2|null|0|Y|200000|202410": true
				},
				{
					"{\"deal_id\":\"202410080004\",\"identity_type\":\"3\",\"identity_number\":\"202410080004\",\"buy_currency_code\":\"THB\",\"buy_amount\":6585999.68,\"sell_currency_code\":\"IDR\",\"sell_amount\":2853384361.36,\"rate\":433.25,\"special_transaction\":\"01\",\"transaction_type\":\"B\",\"maturity_date\":\"2024-10-08\",\"transaction_date\":\"2024-10-08 12:34:56\",\"flag_underlying_document\":\"Y\",\"instrument_type\":\"TODAY\",\"channel_id\":\"JVA\"}|{\"error_schema\":{\"error_code\":\"TRE-00-000\",\"error_message\":{\"indonesian\":\"Sukses\",\"english\":\"Success\"}},\"output_schema\":{\"request_id\":\"9a442ba487a9b05d\",\"data\":{\"deal_id\":\"202410080004\",\"identity_type\":\"3\",\"identity_number\":\"202410080004\",\"rule_category\":\"THB_IDR_01_B\",\"accumulation_rule\":2,\"accumulation_group\":null,\"accumulation_amount\":0,\"flag_underlying_document\":\"Y\",\"threshold\":200000,\"period\":\"202410\"}}}|TRE-00-000|Sukses|Success|9a442ba487a9b05d|202410080004|3|202410080004|THB_IDR_01_B|2|null|0|Y|200000|202410": true
				},
				{
					"{\"deal_id\":\"202410080005\",\"identity_type\":\"3\",\"identity_number\":\"202410080005\",\"buy_currency_code\":\"THB\",\"buy_amount\":6586000,\"sell_currency_code\":\"IDR\",\"sell_amount\":2853384500,\"rate\":433.25,\"special_transaction\":\"01\",\"transaction_type\":\"B\",\"maturity_date\":\"2024-10-08\",\"transaction_date\":\"2024-10-08 12:34:56\",\"flag_underlying_document\":\"Y\",\"instrument_type\":\"TODAY\",\"channel_id\":\"MX3\"}|{\"error_schema\":{\"error_code\":\"TRE-00-000\",\"error_message\":{\"indonesian\":\"Sukses\",\"english\":\"Success\"}},\"output_schema\":{\"request_id\":\"c8281f0439f2dbf8\",\"data\":{\"deal_id\":\"202410080005\",\"identity_type\":\"3\",\"identity_number\":\"202410080005\",\"rule_category\":\"THB_IDR_01_B\",\"accumulation_rule\":2,\"accumulation_group\":null,\"accumulation_amount\":0,\"flag_underlying_document\":\"Y\",\"threshold\":200000,\"period\":\"202410\"}}}|TRE-00-000|Sukses|Success|c8281f0439f2dbf8|202410080005|3|202410080005|THB_IDR_01_B|2|null|0|Y|200000|202410": true
				},
				{
					"{\"deal_id\":\"202410080006\",\"identity_type\":\"3\",\"identity_number\":\"202410080006\",\"buy_currency_code\":\"THB\",\"buy_amount\":6586000.33,\"sell_currency_code\":\"IDR\",\"sell_amount\":2853384642.98,\"rate\":433.25,\"special_transaction\":\"01\",\"transaction_type\":\"B\",\"maturity_date\":\"2024-10-08\",\"transaction_date\":\"2024-10-08 12:34:56\",\"flag_underlying_document\":\"Y\",\"instrument_type\":\"TODAY\",\"channel_id\":\"RET\"}|{\"error_schema\":{\"error_code\":\"TRE-00-000\",\"error_message\":{\"indonesian\":\"Sukses\",\"english\":\"Success\"}},\"output_schema\":{\"request_id\":\"2482d9cfc6c1db09\",\"data\":{\"deal_id\":\"202410080006\",\"identity_type\":\"3\",\"identity_number\":\"202410080006\",\"rule_category\":\"THB_IDR_01_B\",\"accumulation_rule\":2,\"accumulation_group\":null,\"accumulation_amount\":0,\"flag_underlying_document\":\"Y\",\"threshold\":200000,\"period\":\"202410\"}}}|TRE-00-000|Sukses|Success|2482d9cfc6c1db09|202410080006|3|202410080006|THB_IDR_01_B|2|null|0|Y|200000|202410": true
				},
				{
					"{\"deal_id\":\"202410080007\",\"identity_type\":\"3\",\"identity_number\":\"202410080007\",\"buy_currency_code\":\"THB\",\"buy_amount\":6585999.68,\"sell_currency_code\":\"IDR\",\"sell_amount\":2853384361.36,\"rate\":433.25,\"special_transaction\":\"01\",\"transaction_type\":\"B\",\"maturity_date\":\"2024-10-09\",\"transaction_date\":\"2024-10-08 12:34:56\",\"flag_underlying_document\":\"N\",\"instrument_type\":\"TOM\",\"channel_id\":\"MX3\"}|{\"error_schema\":{\"error_code\":\"TRE-00-000\",\"error_message\":{\"indonesian\":\"Sukses\",\"english\":\"Success\"}},\"output_schema\":{\"request_id\":\"d832bc8a23cc4643\",\"data\":{\"deal_id\":\"202410080007\",\"identity_type\":\"3\",\"identity_number\":\"202410080007\",\"rule_category\":\"THB_IDR_01_B\",\"accumulation_rule\":2,\"accumulation_group\":null,\"accumulation_amount\":0,\"flag_underlying_document\":\"N\",\"threshold\":200000,\"period\":\"202410\"}}}|TRE-00-000|Sukses|Success|d832bc8a23cc4643|202410080007|3|202410080007|THB_IDR_01_B|2|null|0|N|200000|202410": true
				},
				{
					"{\"deal_id\":\"202410080008\",\"identity_type\":\"3\",\"identity_number\":\"202410080008\",\"buy_currency_code\":\"THB\",\"buy_amount\":6586000,\"sell_currency_code\":\"IDR\",\"sell_amount\":2853384500,\"rate\":433.25,\"special_transaction\":\"01\",\"transaction_type\":\"B\",\"maturity_date\":\"2024-10-09\",\"transaction_date\":\"2024-10-08 12:34:56\",\"flag_underlying_document\":\"N\",\"instrument_type\":\"TOM\",\"channel_id\":\"RET\"}|{\"error_schema\":{\"error_code\":\"TRE-00-000\",\"error_message\":{\"indonesian\":\"Sukses\",\"english\":\"Success\"}},\"output_schema\":{\"request_id\":\"02cb5667b4ba3d97\",\"data\":{\"deal_id\":\"202410080008\",\"identity_type\":\"3\",\"identity_number\":\"202410080008\",\"rule_category\":\"THB_IDR_01_B\",\"accumulation_rule\":2,\"accumulation_group\":null,\"accumulation_amount\":0,\"flag_underlying_document\":\"Y\",\"threshold\":200000,\"period\":\"202410\"}}}|TRE-00-000|Sukses|Success|02cb5667b4ba3d97|202410080008|3|202410080008|THB_IDR_01_B|2|null|0|Y|200000|202410": true
				},
				{
					"{\"deal_id\":\"202410080009\",\"identity_type\":\"3\",\"identity_number\":\"202410080009\",\"buy_currency_code\":\"THB\",\"buy_amount\":6586000.33,\"sell_currency_code\":\"IDR\",\"sell_amount\":2853384642.98,\"rate\":433.25,\"special_transaction\":\"01\",\"transaction_type\":\"B\",\"maturity_date\":\"2024-10-09\",\"transaction_date\":\"2024-10-08 12:34:56\",\"flag_underlying_document\":\"N\",\"instrument_type\":\"TOM\",\"channel_id\":\"JVA\"}|{\"error_schema\":{\"error_code\":\"TRE-00-000\",\"error_message\":{\"indonesian\":\"Sukses\",\"english\":\"Success\"}},\"output_schema\":{\"request_id\":\"37e083e2921328cf\",\"data\":{\"deal_id\":\"202410080009\",\"identity_type\":\"3\",\"identity_number\":\"202410080009\",\"rule_category\":\"THB_IDR_01_B\",\"accumulation_rule\":2,\"accumulation_group\":null,\"accumulation_amount\":0,\"flag_underlying_document\":\"Y\",\"threshold\":200000,\"period\":\"202410\"}}}|TRE-00-000|Sukses|Success|37e083e2921328cf|202410080009|3|202410080009|THB_IDR_01_B|2|null|0|Y|200000|202410": true
				},
				{
					"{\"deal_id\":\"202410080010\",\"identity_type\":\"3\",\"identity_number\":\"202410080010\",\"buy_currency_code\":\"THB\",\"buy_amount\":6585999.68,\"sell_currency_code\":\"IDR\",\"sell_amount\":2853384361.36,\"rate\":433.25,\"special_transaction\":\"01\",\"transaction_type\":\"B\",\"maturity_date\":\"2024-10-09\",\"transaction_date\":\"2024-10-08 12:34:56\",\"flag_underlying_document\":\"Y\",\"instrument_type\":\"TOM\",\"channel_id\":\"RET\"}|{\"error_schema\":{\"error_code\":\"TRE-00-000\",\"error_message\":{\"indonesian\":\"Sukses\",\"english\":\"Success\"}},\"output_schema\":{\"request_id\":\"3590bc3a096d531d\",\"data\":{\"deal_id\":\"202410080010\",\"identity_type\":\"3\",\"identity_number\":\"202410080010\",\"rule_category\":\"THB_IDR_01_B\",\"accumulation_rule\":2,\"accumulation_group\":null,\"accumulation_amount\":0,\"flag_underlying_document\":\"Y\",\"threshold\":200000,\"period\":\"202410\"}}}|TRE-00-000|Sukses|Success|3590bc3a096d531d|202410080010|3|202410080010|THB_IDR_01_B|2|null|0|Y|200000|202410": true
				}
			]
		}
	],
	"count": 10,
	"totalTime": 26601,
	"collection": {
		"requests": [
			{
				"id": "a3e5ae06-b8ca-46ef-a9bc-6ec48281d982",
				"method": "POST"
			}
		]
	}
}`;
emojiList = [
  "φ(*￣0￣)",
  "╰(*°▽°*)╯",
  "(●ˇ∀ˇ●)",
  "(￣y▽￣)╭ Ohohoho.....",
  "(〃￣︶￣)人(￣︶￣〃)",
  "o((>ω< ))o",
  "ƪ(˘⌣˘)ʃ",
  "(╹ڡ╹ )",
  "(¬‿¬)",
  "(✿◕‿◕✿)",
  "( ͡• ͜ʖ ͡• )",
  "¯_(ツ)_/¯",
  "XD",
];

// elements
processButton = document.getElementById("processButton");
copyButton = document.getElementById("copyButton");
resetButton = document.getElementById("resetButton");
inputArea = document.getElementById("inputArea");
outputArea = document.getElementById("outputArea");
alertSection = document.getElementById("alertSection");
sampleButton = document.getElementById("sampleButton");

// listeners
processButton.addEventListener("click", process);
copyButton.addEventListener("click", copyOutput);
resetButton.addEventListener("click", resetAll);
sampleButton.addEventListener("click", copySample);

// functions
function customRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const appendErrorAlert = (message) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    '<div class="alert alert-danger mb-2 alert-dismissible fade show" role="alert">',
    "   <h6>Oops! Process failed XD</h6>",
    `   <subtitle>${message}</subtitle>`,
    '   <button id="closeAlertButton" type="button" class="btn-close" onClick=closeAlert()></button>',
    "</div>",
  ].join("");

  alertSection.append(wrapper);
};
const appendSuccessAlert = (message) => {
  const wrapper = document.createElement("div");
  const idx = customRandom(1, emojiList.length);
  wrapper.innerHTML = [
    '<div class="alert alert-success mb-2 alert-dismissible fade show" role="alert">',
    `   <subtitle>${message} row(s) processed successfully! ${emojiList[idx]}</subtitle>`,
    '   <button id="closeAlertButton" type="button" class="btn-close" onClick=closeAlert()></button>',
    "</div>",
  ].join("");

  alertSection.append(wrapper);
};

function closeAlert() {
  alertSection.innerHTML = "";
}
function copyOutput() {
  outputArea.select();
  navigator.clipboard.writeText(outputArea.value);
}
function resetAll() {
  location.reload();
}
function copySample() {
  closeAlert();
  inputArea.innerHTML = sampleValue;
}

function process() {
  closeAlert();
  try {
    inputAreaContent = inputArea.value;
    inputJSON = JSON.parse(inputAreaContent);
    inputResult = inputJSON.results[0].allTests;
    totalResult = inputResult.length;
    result = "";

    inputResult.forEach((item) => {
      itemResult = Object.keys(item)[0];
      console.log(itemResult);
      result += itemResult;
      result += "\n";
    });
    outputArea.innerHTML = result;
    appendSuccessAlert(totalResult);
  } catch (error) {
    appendErrorAlert(error);
  }
}
