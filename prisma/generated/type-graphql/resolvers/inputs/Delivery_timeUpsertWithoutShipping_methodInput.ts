import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Delivery_timeCreateWithoutShipping_methodInput } from "../inputs/Delivery_timeCreateWithoutShipping_methodInput";
import { Delivery_timeUpdateWithoutShipping_methodInput } from "../inputs/Delivery_timeUpdateWithoutShipping_methodInput";
import { Delivery_timeWhereInput } from "../inputs/Delivery_timeWhereInput";

@TypeGraphQL.InputType("Delivery_timeUpsertWithoutShipping_methodInput", {})
export class Delivery_timeUpsertWithoutShipping_methodInput {
  @TypeGraphQL.Field(_type => Delivery_timeUpdateWithoutShipping_methodInput, {
    nullable: false
  })
  update!: Delivery_timeUpdateWithoutShipping_methodInput;

  @TypeGraphQL.Field(_type => Delivery_timeCreateWithoutShipping_methodInput, {
    nullable: false
  })
  create!: Delivery_timeCreateWithoutShipping_methodInput;

  @TypeGraphQL.Field(_type => Delivery_timeWhereInput, {
    nullable: true
  })
  where?: Delivery_timeWhereInput | undefined;
}
