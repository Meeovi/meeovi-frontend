import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_group_registration_sales_channelsCreateManyCustomer_groupInputEnvelope } from "../inputs/Customer_group_registration_sales_channelsCreateManyCustomer_groupInputEnvelope";
import { Customer_group_registration_sales_channelsCreateOrConnectWithoutCustomer_groupInput } from "../inputs/Customer_group_registration_sales_channelsCreateOrConnectWithoutCustomer_groupInput";
import { Customer_group_registration_sales_channelsCreateWithoutCustomer_groupInput } from "../inputs/Customer_group_registration_sales_channelsCreateWithoutCustomer_groupInput";
import { Customer_group_registration_sales_channelsScalarWhereInput } from "../inputs/Customer_group_registration_sales_channelsScalarWhereInput";
import { Customer_group_registration_sales_channelsUpdateManyWithWhereWithoutCustomer_groupInput } from "../inputs/Customer_group_registration_sales_channelsUpdateManyWithWhereWithoutCustomer_groupInput";
import { Customer_group_registration_sales_channelsUpdateWithWhereUniqueWithoutCustomer_groupInput } from "../inputs/Customer_group_registration_sales_channelsUpdateWithWhereUniqueWithoutCustomer_groupInput";
import { Customer_group_registration_sales_channelsUpsertWithWhereUniqueWithoutCustomer_groupInput } from "../inputs/Customer_group_registration_sales_channelsUpsertWithWhereUniqueWithoutCustomer_groupInput";
import { Customer_group_registration_sales_channelsWhereUniqueInput } from "../inputs/Customer_group_registration_sales_channelsWhereUniqueInput";

@TypeGraphQL.InputType("Customer_group_registration_sales_channelsUpdateManyWithoutCustomer_groupNestedInput", {})
export class Customer_group_registration_sales_channelsUpdateManyWithoutCustomer_groupNestedInput {
  @TypeGraphQL.Field(_type => [Customer_group_registration_sales_channelsCreateWithoutCustomer_groupInput], {
    nullable: true
  })
  create?: Customer_group_registration_sales_channelsCreateWithoutCustomer_groupInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_registration_sales_channelsCreateOrConnectWithoutCustomer_groupInput], {
    nullable: true
  })
  connectOrCreate?: Customer_group_registration_sales_channelsCreateOrConnectWithoutCustomer_groupInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_registration_sales_channelsUpsertWithWhereUniqueWithoutCustomer_groupInput], {
    nullable: true
  })
  upsert?: Customer_group_registration_sales_channelsUpsertWithWhereUniqueWithoutCustomer_groupInput[] | undefined;

  @TypeGraphQL.Field(_type => Customer_group_registration_sales_channelsCreateManyCustomer_groupInputEnvelope, {
    nullable: true
  })
  createMany?: Customer_group_registration_sales_channelsCreateManyCustomer_groupInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_registration_sales_channelsWhereUniqueInput], {
    nullable: true
  })
  set?: Customer_group_registration_sales_channelsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_registration_sales_channelsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Customer_group_registration_sales_channelsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_registration_sales_channelsWhereUniqueInput], {
    nullable: true
  })
  delete?: Customer_group_registration_sales_channelsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_registration_sales_channelsWhereUniqueInput], {
    nullable: true
  })
  connect?: Customer_group_registration_sales_channelsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_registration_sales_channelsUpdateWithWhereUniqueWithoutCustomer_groupInput], {
    nullable: true
  })
  update?: Customer_group_registration_sales_channelsUpdateWithWhereUniqueWithoutCustomer_groupInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_registration_sales_channelsUpdateManyWithWhereWithoutCustomer_groupInput], {
    nullable: true
  })
  updateMany?: Customer_group_registration_sales_channelsUpdateManyWithWhereWithoutCustomer_groupInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_registration_sales_channelsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Customer_group_registration_sales_channelsScalarWhereInput[] | undefined;
}
