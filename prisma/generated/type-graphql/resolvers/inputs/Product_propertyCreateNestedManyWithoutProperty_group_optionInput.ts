import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_propertyCreateManyProperty_group_optionInputEnvelope } from "../inputs/Product_propertyCreateManyProperty_group_optionInputEnvelope";
import { Product_propertyCreateOrConnectWithoutProperty_group_optionInput } from "../inputs/Product_propertyCreateOrConnectWithoutProperty_group_optionInput";
import { Product_propertyCreateWithoutProperty_group_optionInput } from "../inputs/Product_propertyCreateWithoutProperty_group_optionInput";
import { Product_propertyWhereUniqueInput } from "../inputs/Product_propertyWhereUniqueInput";

@TypeGraphQL.InputType("Product_propertyCreateNestedManyWithoutProperty_group_optionInput", {})
export class Product_propertyCreateNestedManyWithoutProperty_group_optionInput {
  @TypeGraphQL.Field(_type => [Product_propertyCreateWithoutProperty_group_optionInput], {
    nullable: true
  })
  create?: Product_propertyCreateWithoutProperty_group_optionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_propertyCreateOrConnectWithoutProperty_group_optionInput], {
    nullable: true
  })
  connectOrCreate?: Product_propertyCreateOrConnectWithoutProperty_group_optionInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_propertyCreateManyProperty_group_optionInputEnvelope, {
    nullable: true
  })
  createMany?: Product_propertyCreateManyProperty_group_optionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_propertyWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_propertyWhereUniqueInput[] | undefined;
}
