import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateWithoutApp_shipping_methodInput } from "../inputs/MediaCreateWithoutApp_shipping_methodInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaCreateOrConnectWithoutApp_shipping_methodInput", {})
export class MediaCreateOrConnectWithoutApp_shipping_methodInput {
  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: false
  })
  where!: MediaWhereUniqueInput;

  @TypeGraphQL.Field(_type => MediaCreateWithoutApp_shipping_methodInput, {
    nullable: false
  })
  create!: MediaCreateWithoutApp_shipping_methodInput;
}
