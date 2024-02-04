import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Delivery_timeUpdateWithoutShipping_methodInput } from "../inputs/Delivery_timeUpdateWithoutShipping_methodInput";
import { Delivery_timeWhereInput } from "../inputs/Delivery_timeWhereInput";

@TypeGraphQL.InputType("Delivery_timeUpdateToOneWithWhereWithoutShipping_methodInput", {})
export class Delivery_timeUpdateToOneWithWhereWithoutShipping_methodInput {
  @TypeGraphQL.Field(_type => Delivery_timeWhereInput, {
    nullable: true
  })
  where?: Delivery_timeWhereInput | undefined;

  @TypeGraphQL.Field(_type => Delivery_timeUpdateWithoutShipping_methodInput, {
    nullable: false
  })
  data!: Delivery_timeUpdateWithoutShipping_methodInput;
}
