import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateOrConnectWithoutCustomer_addressInput } from "../inputs/CustomerCreateOrConnectWithoutCustomer_addressInput";
import { CustomerCreateWithoutCustomer_addressInput } from "../inputs/CustomerCreateWithoutCustomer_addressInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerCreateNestedOneWithoutCustomer_addressInput", {})
export class CustomerCreateNestedOneWithoutCustomer_addressInput {
  @TypeGraphQL.Field(_type => CustomerCreateWithoutCustomer_addressInput, {
    nullable: true
  })
  create?: CustomerCreateWithoutCustomer_addressInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateOrConnectWithoutCustomer_addressInput, {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutCustomer_addressInput | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomerWhereUniqueInput | undefined;
}
