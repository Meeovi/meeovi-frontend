import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateWithoutOrder_customerInput } from "../inputs/CustomerCreateWithoutOrder_customerInput";
import { CustomerUpdateWithoutOrder_customerInput } from "../inputs/CustomerUpdateWithoutOrder_customerInput";
import { CustomerWhereInput } from "../inputs/CustomerWhereInput";

@TypeGraphQL.InputType("CustomerUpsertWithoutOrder_customerInput", {})
export class CustomerUpsertWithoutOrder_customerInput {
  @TypeGraphQL.Field(_type => CustomerUpdateWithoutOrder_customerInput, {
    nullable: false
  })
  update!: CustomerUpdateWithoutOrder_customerInput;

  @TypeGraphQL.Field(_type => CustomerCreateWithoutOrder_customerInput, {
    nullable: false
  })
  create!: CustomerCreateWithoutOrder_customerInput;

  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true
  })
  where?: CustomerWhereInput | undefined;
}
