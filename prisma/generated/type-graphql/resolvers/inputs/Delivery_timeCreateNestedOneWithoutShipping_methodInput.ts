import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Delivery_timeCreateOrConnectWithoutShipping_methodInput } from "../inputs/Delivery_timeCreateOrConnectWithoutShipping_methodInput";
import { Delivery_timeCreateWithoutShipping_methodInput } from "../inputs/Delivery_timeCreateWithoutShipping_methodInput";
import { Delivery_timeWhereUniqueInput } from "../inputs/Delivery_timeWhereUniqueInput";

@TypeGraphQL.InputType("Delivery_timeCreateNestedOneWithoutShipping_methodInput", {})
export class Delivery_timeCreateNestedOneWithoutShipping_methodInput {
  @TypeGraphQL.Field(_type => Delivery_timeCreateWithoutShipping_methodInput, {
    nullable: true
  })
  create?: Delivery_timeCreateWithoutShipping_methodInput | undefined;

  @TypeGraphQL.Field(_type => Delivery_timeCreateOrConnectWithoutShipping_methodInput, {
    nullable: true
  })
  connectOrCreate?: Delivery_timeCreateOrConnectWithoutShipping_methodInput | undefined;

  @TypeGraphQL.Field(_type => Delivery_timeWhereUniqueInput, {
    nullable: true
  })
  connect?: Delivery_timeWhereUniqueInput | undefined;
}
