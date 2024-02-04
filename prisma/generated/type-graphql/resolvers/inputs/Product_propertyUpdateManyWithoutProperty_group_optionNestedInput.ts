import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_propertyCreateManyProperty_group_optionInputEnvelope } from "../inputs/Product_propertyCreateManyProperty_group_optionInputEnvelope";
import { Product_propertyCreateOrConnectWithoutProperty_group_optionInput } from "../inputs/Product_propertyCreateOrConnectWithoutProperty_group_optionInput";
import { Product_propertyCreateWithoutProperty_group_optionInput } from "../inputs/Product_propertyCreateWithoutProperty_group_optionInput";
import { Product_propertyScalarWhereInput } from "../inputs/Product_propertyScalarWhereInput";
import { Product_propertyUpdateManyWithWhereWithoutProperty_group_optionInput } from "../inputs/Product_propertyUpdateManyWithWhereWithoutProperty_group_optionInput";
import { Product_propertyUpdateWithWhereUniqueWithoutProperty_group_optionInput } from "../inputs/Product_propertyUpdateWithWhereUniqueWithoutProperty_group_optionInput";
import { Product_propertyUpsertWithWhereUniqueWithoutProperty_group_optionInput } from "../inputs/Product_propertyUpsertWithWhereUniqueWithoutProperty_group_optionInput";
import { Product_propertyWhereUniqueInput } from "../inputs/Product_propertyWhereUniqueInput";

@TypeGraphQL.InputType("Product_propertyUpdateManyWithoutProperty_group_optionNestedInput", {})
export class Product_propertyUpdateManyWithoutProperty_group_optionNestedInput {
  @TypeGraphQL.Field(_type => [Product_propertyCreateWithoutProperty_group_optionInput], {
    nullable: true
  })
  create?: Product_propertyCreateWithoutProperty_group_optionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_propertyCreateOrConnectWithoutProperty_group_optionInput], {
    nullable: true
  })
  connectOrCreate?: Product_propertyCreateOrConnectWithoutProperty_group_optionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_propertyUpsertWithWhereUniqueWithoutProperty_group_optionInput], {
    nullable: true
  })
  upsert?: Product_propertyUpsertWithWhereUniqueWithoutProperty_group_optionInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_propertyCreateManyProperty_group_optionInputEnvelope, {
    nullable: true
  })
  createMany?: Product_propertyCreateManyProperty_group_optionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_propertyWhereUniqueInput], {
    nullable: true
  })
  set?: Product_propertyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_propertyWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Product_propertyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_propertyWhereUniqueInput], {
    nullable: true
  })
  delete?: Product_propertyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_propertyWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_propertyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_propertyUpdateWithWhereUniqueWithoutProperty_group_optionInput], {
    nullable: true
  })
  update?: Product_propertyUpdateWithWhereUniqueWithoutProperty_group_optionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_propertyUpdateManyWithWhereWithoutProperty_group_optionInput], {
    nullable: true
  })
  updateMany?: Product_propertyUpdateManyWithWhereWithoutProperty_group_optionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_propertyScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_propertyScalarWhereInput[] | undefined;
}
