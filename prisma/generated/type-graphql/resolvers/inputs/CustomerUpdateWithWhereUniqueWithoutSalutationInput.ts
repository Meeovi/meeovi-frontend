import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerUpdateWithoutSalutationInput } from "../inputs/CustomerUpdateWithoutSalutationInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerUpdateWithWhereUniqueWithoutSalutationInput", {})
export class CustomerUpdateWithWhereUniqueWithoutSalutationInput {
  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerUpdateWithoutSalutationInput, {
    nullable: false
  })
  data!: CustomerUpdateWithoutSalutationInput;
}
