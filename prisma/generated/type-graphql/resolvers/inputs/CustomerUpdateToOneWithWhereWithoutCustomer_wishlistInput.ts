import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerUpdateWithoutCustomer_wishlistInput } from "../inputs/CustomerUpdateWithoutCustomer_wishlistInput";
import { CustomerWhereInput } from "../inputs/CustomerWhereInput";

@TypeGraphQL.InputType("CustomerUpdateToOneWithWhereWithoutCustomer_wishlistInput", {})
export class CustomerUpdateToOneWithWhereWithoutCustomer_wishlistInput {
  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true
  })
  where?: CustomerWhereInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpdateWithoutCustomer_wishlistInput, {
    nullable: false
  })
  data!: CustomerUpdateWithoutCustomer_wishlistInput;
}
