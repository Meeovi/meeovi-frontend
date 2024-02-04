import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateManyCustomer_groupInputEnvelope } from "../inputs/CustomerCreateManyCustomer_groupInputEnvelope";
import { CustomerCreateOrConnectWithoutCustomer_groupInput } from "../inputs/CustomerCreateOrConnectWithoutCustomer_groupInput";
import { CustomerCreateWithoutCustomer_groupInput } from "../inputs/CustomerCreateWithoutCustomer_groupInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerCreateNestedManyWithoutCustomer_groupInput", {})
export class CustomerCreateNestedManyWithoutCustomer_groupInput {
  @TypeGraphQL.Field(_type => [CustomerCreateWithoutCustomer_groupInput], {
    nullable: true
  })
  create?: CustomerCreateWithoutCustomer_groupInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerCreateOrConnectWithoutCustomer_groupInput], {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutCustomer_groupInput[] | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateManyCustomer_groupInputEnvelope, {
    nullable: true
  })
  createMany?: CustomerCreateManyCustomer_groupInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CustomerWhereUniqueInput], {
    nullable: true
  })
  connect?: CustomerWhereUniqueInput[] | undefined;
}
