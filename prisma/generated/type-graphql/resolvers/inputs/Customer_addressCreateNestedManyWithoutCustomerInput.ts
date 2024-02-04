import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_addressCreateManyCustomerInputEnvelope } from "../inputs/Customer_addressCreateManyCustomerInputEnvelope";
import { Customer_addressCreateOrConnectWithoutCustomerInput } from "../inputs/Customer_addressCreateOrConnectWithoutCustomerInput";
import { Customer_addressCreateWithoutCustomerInput } from "../inputs/Customer_addressCreateWithoutCustomerInput";
import { Customer_addressWhereUniqueInput } from "../inputs/Customer_addressWhereUniqueInput";

@TypeGraphQL.InputType("Customer_addressCreateNestedManyWithoutCustomerInput", {})
export class Customer_addressCreateNestedManyWithoutCustomerInput {
  @TypeGraphQL.Field(_type => [Customer_addressCreateWithoutCustomerInput], {
    nullable: true
  })
  create?: Customer_addressCreateWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_addressCreateOrConnectWithoutCustomerInput], {
    nullable: true
  })
  connectOrCreate?: Customer_addressCreateOrConnectWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => Customer_addressCreateManyCustomerInputEnvelope, {
    nullable: true
  })
  createMany?: Customer_addressCreateManyCustomerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Customer_addressWhereUniqueInput], {
    nullable: true
  })
  connect?: Customer_addressWhereUniqueInput[] | undefined;
}
