import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_group_translationCreateManyCustomer_groupInputEnvelope } from "../inputs/Customer_group_translationCreateManyCustomer_groupInputEnvelope";
import { Customer_group_translationCreateOrConnectWithoutCustomer_groupInput } from "../inputs/Customer_group_translationCreateOrConnectWithoutCustomer_groupInput";
import { Customer_group_translationCreateWithoutCustomer_groupInput } from "../inputs/Customer_group_translationCreateWithoutCustomer_groupInput";
import { Customer_group_translationWhereUniqueInput } from "../inputs/Customer_group_translationWhereUniqueInput";

@TypeGraphQL.InputType("Customer_group_translationCreateNestedManyWithoutCustomer_groupInput", {})
export class Customer_group_translationCreateNestedManyWithoutCustomer_groupInput {
  @TypeGraphQL.Field(_type => [Customer_group_translationCreateWithoutCustomer_groupInput], {
    nullable: true
  })
  create?: Customer_group_translationCreateWithoutCustomer_groupInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_translationCreateOrConnectWithoutCustomer_groupInput], {
    nullable: true
  })
  connectOrCreate?: Customer_group_translationCreateOrConnectWithoutCustomer_groupInput[] | undefined;

  @TypeGraphQL.Field(_type => Customer_group_translationCreateManyCustomer_groupInputEnvelope, {
    nullable: true
  })
  createMany?: Customer_group_translationCreateManyCustomer_groupInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Customer_group_translationWhereUniqueInput[] | undefined;
}
