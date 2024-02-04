import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateOrConnectWithoutSwag_paypal_pos_sales_channel_mediaInput } from "../inputs/MediaCreateOrConnectWithoutSwag_paypal_pos_sales_channel_mediaInput";
import { MediaCreateWithoutSwag_paypal_pos_sales_channel_mediaInput } from "../inputs/MediaCreateWithoutSwag_paypal_pos_sales_channel_mediaInput";
import { MediaUpdateToOneWithWhereWithoutSwag_paypal_pos_sales_channel_mediaInput } from "../inputs/MediaUpdateToOneWithWhereWithoutSwag_paypal_pos_sales_channel_mediaInput";
import { MediaUpsertWithoutSwag_paypal_pos_sales_channel_mediaInput } from "../inputs/MediaUpsertWithoutSwag_paypal_pos_sales_channel_mediaInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaUpdateOneRequiredWithoutSwag_paypal_pos_sales_channel_mediaNestedInput", {})
export class MediaUpdateOneRequiredWithoutSwag_paypal_pos_sales_channel_mediaNestedInput {
  @TypeGraphQL.Field(_type => MediaCreateWithoutSwag_paypal_pos_sales_channel_mediaInput, {
    nullable: true
  })
  create?: MediaCreateWithoutSwag_paypal_pos_sales_channel_mediaInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateOrConnectWithoutSwag_paypal_pos_sales_channel_mediaInput, {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutSwag_paypal_pos_sales_channel_mediaInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpsertWithoutSwag_paypal_pos_sales_channel_mediaInput, {
    nullable: true
  })
  upsert?: MediaUpsertWithoutSwag_paypal_pos_sales_channel_mediaInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: true
  })
  connect?: MediaWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpdateToOneWithWhereWithoutSwag_paypal_pos_sales_channel_mediaInput, {
    nullable: true
  })
  update?: MediaUpdateToOneWithWhereWithoutSwag_paypal_pos_sales_channel_mediaInput | undefined;
}
