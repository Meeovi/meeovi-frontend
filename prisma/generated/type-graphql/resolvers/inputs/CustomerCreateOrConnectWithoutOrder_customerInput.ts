import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateWithoutOrder_customerInput } from "../inputs/CustomerCreateWithoutOrder_customerInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerCreateOrConnectWithoutOrder_customerInput", {})
export class CustomerCreateOrConnectWithoutOrder_customerInput {
  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerCreateWithoutOrder_customerInput, {
    nullable: false
  })
  create!: CustomerCreateWithoutOrder_customerInput;
}
