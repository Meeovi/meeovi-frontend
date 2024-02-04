import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateOrConnectWithoutApp_shipping_methodInput } from "../inputs/MediaCreateOrConnectWithoutApp_shipping_methodInput";
import { MediaCreateWithoutApp_shipping_methodInput } from "../inputs/MediaCreateWithoutApp_shipping_methodInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaCreateNestedOneWithoutApp_shipping_methodInput", {})
export class MediaCreateNestedOneWithoutApp_shipping_methodInput {
  @TypeGraphQL.Field(_type => MediaCreateWithoutApp_shipping_methodInput, {
    nullable: true
  })
  create?: MediaCreateWithoutApp_shipping_methodInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateOrConnectWithoutApp_shipping_methodInput, {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutApp_shipping_methodInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: true
  })
  connect?: MediaWhereUniqueInput | undefined;
}
