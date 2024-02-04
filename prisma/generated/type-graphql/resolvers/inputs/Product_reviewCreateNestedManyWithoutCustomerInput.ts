import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_reviewCreateManyCustomerInputEnvelope } from "../inputs/Product_reviewCreateManyCustomerInputEnvelope";
import { Product_reviewCreateOrConnectWithoutCustomerInput } from "../inputs/Product_reviewCreateOrConnectWithoutCustomerInput";
import { Product_reviewCreateWithoutCustomerInput } from "../inputs/Product_reviewCreateWithoutCustomerInput";
import { Product_reviewWhereUniqueInput } from "../inputs/Product_reviewWhereUniqueInput";

@TypeGraphQL.InputType("Product_reviewCreateNestedManyWithoutCustomerInput", {})
export class Product_reviewCreateNestedManyWithoutCustomerInput {
  @TypeGraphQL.Field(_type => [Product_reviewCreateWithoutCustomerInput], {
    nullable: true
  })
  create?: Product_reviewCreateWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewCreateOrConnectWithoutCustomerInput], {
    nullable: true
  })
  connectOrCreate?: Product_reviewCreateOrConnectWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_reviewCreateManyCustomerInputEnvelope, {
    nullable: true
  })
  createMany?: Product_reviewCreateManyCustomerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_reviewWhereUniqueInput[] | undefined;
}
