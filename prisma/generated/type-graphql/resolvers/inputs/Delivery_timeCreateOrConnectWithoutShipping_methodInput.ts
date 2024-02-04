import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Delivery_timeCreateWithoutShipping_methodInput } from "../inputs/Delivery_timeCreateWithoutShipping_methodInput";
import { Delivery_timeWhereUniqueInput } from "../inputs/Delivery_timeWhereUniqueInput";

@TypeGraphQL.InputType("Delivery_timeCreateOrConnectWithoutShipping_methodInput", {})
export class Delivery_timeCreateOrConnectWithoutShipping_methodInput {
  @TypeGraphQL.Field(_type => Delivery_timeWhereUniqueInput, {
    nullable: false
  })
  where!: Delivery_timeWhereUniqueInput;

  @TypeGraphQL.Field(_type => Delivery_timeCreateWithoutShipping_methodInput, {
    nullable: false
  })
  create!: Delivery_timeCreateWithoutShipping_methodInput;
}
