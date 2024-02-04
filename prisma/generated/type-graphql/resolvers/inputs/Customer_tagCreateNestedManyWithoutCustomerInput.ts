import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_tagCreateManyCustomerInputEnvelope } from "../inputs/Customer_tagCreateManyCustomerInputEnvelope";
import { Customer_tagCreateOrConnectWithoutCustomerInput } from "../inputs/Customer_tagCreateOrConnectWithoutCustomerInput";
import { Customer_tagCreateWithoutCustomerInput } from "../inputs/Customer_tagCreateWithoutCustomerInput";
import { Customer_tagWhereUniqueInput } from "../inputs/Customer_tagWhereUniqueInput";

@TypeGraphQL.InputType("Customer_tagCreateNestedManyWithoutCustomerInput", {})
export class Customer_tagCreateNestedManyWithoutCustomerInput {
  @TypeGraphQL.Field(_type => [Customer_tagCreateWithoutCustomerInput], {
    nullable: true
  })
  create?: Customer_tagCreateWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_tagCreateOrConnectWithoutCustomerInput], {
    nullable: true
  })
  connectOrCreate?: Customer_tagCreateOrConnectWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => Customer_tagCreateManyCustomerInputEnvelope, {
    nullable: true
  })
  createMany?: Customer_tagCreateManyCustomerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Customer_tagWhereUniqueInput], {
    nullable: true
  })
  connect?: Customer_tagWhereUniqueInput[] | undefined;
}
