import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateOrConnectWithoutCustomer_tagInput } from "../inputs/CustomerCreateOrConnectWithoutCustomer_tagInput";
import { CustomerCreateWithoutCustomer_tagInput } from "../inputs/CustomerCreateWithoutCustomer_tagInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerCreateNestedOneWithoutCustomer_tagInput", {})
export class CustomerCreateNestedOneWithoutCustomer_tagInput {
  @TypeGraphQL.Field(_type => CustomerCreateWithoutCustomer_tagInput, {
    nullable: true
  })
  create?: CustomerCreateWithoutCustomer_tagInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateOrConnectWithoutCustomer_tagInput, {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutCustomer_tagInput | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomerWhereUniqueInput | undefined;
}
