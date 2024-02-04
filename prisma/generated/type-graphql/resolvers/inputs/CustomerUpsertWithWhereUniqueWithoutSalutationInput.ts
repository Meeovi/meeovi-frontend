import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateWithoutSalutationInput } from "../inputs/CustomerCreateWithoutSalutationInput";
import { CustomerUpdateWithoutSalutationInput } from "../inputs/CustomerUpdateWithoutSalutationInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerUpsertWithWhereUniqueWithoutSalutationInput", {})
export class CustomerUpsertWithWhereUniqueWithoutSalutationInput {
  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerUpdateWithoutSalutationInput, {
    nullable: false
  })
  update!: CustomerUpdateWithoutSalutationInput;

  @TypeGraphQL.Field(_type => CustomerCreateWithoutSalutationInput, {
    nullable: false
  })
  create!: CustomerCreateWithoutSalutationInput;
}
