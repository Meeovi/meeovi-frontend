import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_group_translationCreateManyCustomer_groupInputEnvelope } from "../inputs/Customer_group_translationCreateManyCustomer_groupInputEnvelope";
import { Customer_group_translationCreateOrConnectWithoutCustomer_groupInput } from "../inputs/Customer_group_translationCreateOrConnectWithoutCustomer_groupInput";
import { Customer_group_translationCreateWithoutCustomer_groupInput } from "../inputs/Customer_group_translationCreateWithoutCustomer_groupInput";
import { Customer_group_translationScalarWhereInput } from "../inputs/Customer_group_translationScalarWhereInput";
import { Customer_group_translationUpdateManyWithWhereWithoutCustomer_groupInput } from "../inputs/Customer_group_translationUpdateManyWithWhereWithoutCustomer_groupInput";
import { Customer_group_translationUpdateWithWhereUniqueWithoutCustomer_groupInput } from "../inputs/Customer_group_translationUpdateWithWhereUniqueWithoutCustomer_groupInput";
import { Customer_group_translationUpsertWithWhereUniqueWithoutCustomer_groupInput } from "../inputs/Customer_group_translationUpsertWithWhereUniqueWithoutCustomer_groupInput";
import { Customer_group_translationWhereUniqueInput } from "../inputs/Customer_group_translationWhereUniqueInput";

@TypeGraphQL.InputType("Customer_group_translationUpdateManyWithoutCustomer_groupNestedInput", {})
export class Customer_group_translationUpdateManyWithoutCustomer_groupNestedInput {
  @TypeGraphQL.Field(_type => [Customer_group_translationCreateWithoutCustomer_groupInput], {
    nullable: true
  })
  create?: Customer_group_translationCreateWithoutCustomer_groupInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_translationCreateOrConnectWithoutCustomer_groupInput], {
    nullable: true
  })
  connectOrCreate?: Customer_group_translationCreateOrConnectWithoutCustomer_groupInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_translationUpsertWithWhereUniqueWithoutCustomer_groupInput], {
    nullable: true
  })
  upsert?: Customer_group_translationUpsertWithWhereUniqueWithoutCustomer_groupInput[] | undefined;

  @TypeGraphQL.Field(_type => Customer_group_translationCreateManyCustomer_groupInputEnvelope, {
    nullable: true
  })
  createMany?: Customer_group_translationCreateManyCustomer_groupInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_translationWhereUniqueInput], {
    nullable: true
  })
  set?: Customer_group_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Customer_group_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: Customer_group_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Customer_group_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_translationUpdateWithWhereUniqueWithoutCustomer_groupInput], {
    nullable: true
  })
  update?: Customer_group_translationUpdateWithWhereUniqueWithoutCustomer_groupInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_translationUpdateManyWithWhereWithoutCustomer_groupInput], {
    nullable: true
  })
  updateMany?: Customer_group_translationUpdateManyWithWhereWithoutCustomer_groupInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Customer_group_translationScalarWhereInput[] | undefined;
}
