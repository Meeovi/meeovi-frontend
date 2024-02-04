import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerUpdateWithoutUser_customer_created_by_idTouserInput } from "../inputs/CustomerUpdateWithoutUser_customer_created_by_idTouserInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerUpdateWithWhereUniqueWithoutUser_customer_created_by_idTouserInput", {})
export class CustomerUpdateWithWhereUniqueWithoutUser_customer_created_by_idTouserInput {
  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerUpdateWithoutUser_customer_created_by_idTouserInput, {
    nullable: false
  })
  data!: CustomerUpdateWithoutUser_customer_created_by_idTouserInput;
}
