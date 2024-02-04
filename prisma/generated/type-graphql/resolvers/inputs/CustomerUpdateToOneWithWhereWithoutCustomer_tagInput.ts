import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerUpdateWithoutCustomer_tagInput } from "../inputs/CustomerUpdateWithoutCustomer_tagInput";
import { CustomerWhereInput } from "../inputs/CustomerWhereInput";

@TypeGraphQL.InputType("CustomerUpdateToOneWithWhereWithoutCustomer_tagInput", {})
export class CustomerUpdateToOneWithWhereWithoutCustomer_tagInput {
  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true
  })
  where?: CustomerWhereInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpdateWithoutCustomer_tagInput, {
    nullable: false
  })
  data!: CustomerUpdateWithoutCustomer_tagInput;
}
