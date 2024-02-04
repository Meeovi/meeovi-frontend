import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateOrConnectWithoutApp_shipping_methodInput } from "../inputs/MediaCreateOrConnectWithoutApp_shipping_methodInput";
import { MediaCreateWithoutApp_shipping_methodInput } from "../inputs/MediaCreateWithoutApp_shipping_methodInput";
import { MediaUpdateToOneWithWhereWithoutApp_shipping_methodInput } from "../inputs/MediaUpdateToOneWithWhereWithoutApp_shipping_methodInput";
import { MediaUpsertWithoutApp_shipping_methodInput } from "../inputs/MediaUpsertWithoutApp_shipping_methodInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaUpdateOneWithoutApp_shipping_methodNestedInput", {})
export class MediaUpdateOneWithoutApp_shipping_methodNestedInput {
  @TypeGraphQL.Field(_type => MediaCreateWithoutApp_shipping_methodInput, {
    nullable: true
  })
  create?: MediaCreateWithoutApp_shipping_methodInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateOrConnectWithoutApp_shipping_methodInput, {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutApp_shipping_methodInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpsertWithoutApp_shipping_methodInput, {
    nullable: true
  })
  upsert?: MediaUpsertWithoutApp_shipping_methodInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  disconnect?: MediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  delete?: MediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: true
  })
  connect?: MediaWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpdateToOneWithWhereWithoutApp_shipping_methodInput, {
    nullable: true
  })
  update?: MediaUpdateToOneWithWhereWithoutApp_shipping_methodInput | undefined;
}
