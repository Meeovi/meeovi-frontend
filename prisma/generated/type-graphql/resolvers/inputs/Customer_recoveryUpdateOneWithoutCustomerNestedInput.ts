import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_recoveryCreateOrConnectWithoutCustomerInput } from "../inputs/Customer_recoveryCreateOrConnectWithoutCustomerInput";
import { Customer_recoveryCreateWithoutCustomerInput } from "../inputs/Customer_recoveryCreateWithoutCustomerInput";
import { Customer_recoveryUpdateToOneWithWhereWithoutCustomerInput } from "../inputs/Customer_recoveryUpdateToOneWithWhereWithoutCustomerInput";
import { Customer_recoveryUpsertWithoutCustomerInput } from "../inputs/Customer_recoveryUpsertWithoutCustomerInput";
import { Customer_recoveryWhereInput } from "../inputs/Customer_recoveryWhereInput";
import { Customer_recoveryWhereUniqueInput } from "../inputs/Customer_recoveryWhereUniqueInput";

@TypeGraphQL.InputType("Customer_recoveryUpdateOneWithoutCustomerNestedInput", {})
export class Customer_recoveryUpdateOneWithoutCustomerNestedInput {
  @TypeGraphQL.Field(_type => Customer_recoveryCreateWithoutCustomerInput, {
    nullable: true
  })
  create?: Customer_recoveryCreateWithoutCustomerInput | undefined;

  @TypeGraphQL.Field(_type => Customer_recoveryCreateOrConnectWithoutCustomerInput, {
    nullable: true
  })
  connectOrCreate?: Customer_recoveryCreateOrConnectWithoutCustomerInput | undefined;

  @TypeGraphQL.Field(_type => Customer_recoveryUpsertWithoutCustomerInput, {
    nullable: true
  })
  upsert?: Customer_recoveryUpsertWithoutCustomerInput | undefined;

  @TypeGraphQL.Field(_type => Customer_recoveryWhereInput, {
    nullable: true
  })
  disconnect?: Customer_recoveryWhereInput | undefined;

  @TypeGraphQL.Field(_type => Customer_recoveryWhereInput, {
    nullable: true
  })
  delete?: Customer_recoveryWhereInput | undefined;

  @TypeGraphQL.Field(_type => Customer_recoveryWhereUniqueInput, {
    nullable: true
  })
  connect?: Customer_recoveryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Customer_recoveryUpdateToOneWithWhereWithoutCustomerInput, {
    nullable: true
  })
  update?: Customer_recoveryUpdateToOneWithWhereWithoutCustomerInput | undefined;
}
