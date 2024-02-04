import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateOrConnectWithoutApp_payment_methodInput } from "../inputs/MediaCreateOrConnectWithoutApp_payment_methodInput";
import { MediaCreateWithoutApp_payment_methodInput } from "../inputs/MediaCreateWithoutApp_payment_methodInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaCreateNestedOneWithoutApp_payment_methodInput", {})
export class MediaCreateNestedOneWithoutApp_payment_methodInput {
  @TypeGraphQL.Field(_type => MediaCreateWithoutApp_payment_methodInput, {
    nullable: true
  })
  create?: MediaCreateWithoutApp_payment_methodInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateOrConnectWithoutApp_payment_methodInput, {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutApp_payment_methodInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: true
  })
  connect?: MediaWhereUniqueInput | undefined;
}
