import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateWithoutSwag_paypal_pos_sales_channel_mediaInput } from "../inputs/MediaCreateWithoutSwag_paypal_pos_sales_channel_mediaInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaCreateOrConnectWithoutSwag_paypal_pos_sales_channel_mediaInput", {})
export class MediaCreateOrConnectWithoutSwag_paypal_pos_sales_channel_mediaInput {
  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: false
  })
  where!: MediaWhereUniqueInput;

  @TypeGraphQL.Field(_type => MediaCreateWithoutSwag_paypal_pos_sales_channel_mediaInput, {
    nullable: false
  })
  create!: MediaCreateWithoutSwag_paypal_pos_sales_channel_mediaInput;
}
