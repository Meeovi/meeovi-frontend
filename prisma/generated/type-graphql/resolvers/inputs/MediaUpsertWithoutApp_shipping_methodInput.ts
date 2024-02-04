import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateWithoutApp_shipping_methodInput } from "../inputs/MediaCreateWithoutApp_shipping_methodInput";
import { MediaUpdateWithoutApp_shipping_methodInput } from "../inputs/MediaUpdateWithoutApp_shipping_methodInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpsertWithoutApp_shipping_methodInput", {})
export class MediaUpsertWithoutApp_shipping_methodInput {
  @TypeGraphQL.Field(_type => MediaUpdateWithoutApp_shipping_methodInput, {
    nullable: false
  })
  update!: MediaUpdateWithoutApp_shipping_methodInput;

  @TypeGraphQL.Field(_type => MediaCreateWithoutApp_shipping_methodInput, {
    nullable: false
  })
  create!: MediaCreateWithoutApp_shipping_methodInput;

  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;
}
