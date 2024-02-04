import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_tagCreateManyTagInputEnvelope } from "../inputs/Product_tagCreateManyTagInputEnvelope";
import { Product_tagCreateOrConnectWithoutTagInput } from "../inputs/Product_tagCreateOrConnectWithoutTagInput";
import { Product_tagCreateWithoutTagInput } from "../inputs/Product_tagCreateWithoutTagInput";
import { Product_tagWhereUniqueInput } from "../inputs/Product_tagWhereUniqueInput";

@TypeGraphQL.InputType("Product_tagCreateNestedManyWithoutTagInput", {})
export class Product_tagCreateNestedManyWithoutTagInput {
  @TypeGraphQL.Field(_type => [Product_tagCreateWithoutTagInput], {
    nullable: true
  })
  create?: Product_tagCreateWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_tagCreateOrConnectWithoutTagInput], {
    nullable: true
  })
  connectOrCreate?: Product_tagCreateOrConnectWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_tagCreateManyTagInputEnvelope, {
    nullable: true
  })
  createMany?: Product_tagCreateManyTagInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_tagWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_tagWhereUniqueInput[] | undefined;
}
