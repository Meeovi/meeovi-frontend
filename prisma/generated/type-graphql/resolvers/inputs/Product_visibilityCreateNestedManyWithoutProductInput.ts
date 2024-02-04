import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_visibilityCreateManyProductInputEnvelope } from "../inputs/Product_visibilityCreateManyProductInputEnvelope";
import { Product_visibilityCreateOrConnectWithoutProductInput } from "../inputs/Product_visibilityCreateOrConnectWithoutProductInput";
import { Product_visibilityCreateWithoutProductInput } from "../inputs/Product_visibilityCreateWithoutProductInput";
import { Product_visibilityWhereUniqueInput } from "../inputs/Product_visibilityWhereUniqueInput";

@TypeGraphQL.InputType("Product_visibilityCreateNestedManyWithoutProductInput", {})
export class Product_visibilityCreateNestedManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [Product_visibilityCreateWithoutProductInput], {
    nullable: true
  })
  create?: Product_visibilityCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_visibilityCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: Product_visibilityCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_visibilityCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: Product_visibilityCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_visibilityWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_visibilityWhereUniqueInput[] | undefined;
}
