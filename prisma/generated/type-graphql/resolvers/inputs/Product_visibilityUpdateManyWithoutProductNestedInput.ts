import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_visibilityCreateManyProductInputEnvelope } from "../inputs/Product_visibilityCreateManyProductInputEnvelope";
import { Product_visibilityCreateOrConnectWithoutProductInput } from "../inputs/Product_visibilityCreateOrConnectWithoutProductInput";
import { Product_visibilityCreateWithoutProductInput } from "../inputs/Product_visibilityCreateWithoutProductInput";
import { Product_visibilityScalarWhereInput } from "../inputs/Product_visibilityScalarWhereInput";
import { Product_visibilityUpdateManyWithWhereWithoutProductInput } from "../inputs/Product_visibilityUpdateManyWithWhereWithoutProductInput";
import { Product_visibilityUpdateWithWhereUniqueWithoutProductInput } from "../inputs/Product_visibilityUpdateWithWhereUniqueWithoutProductInput";
import { Product_visibilityUpsertWithWhereUniqueWithoutProductInput } from "../inputs/Product_visibilityUpsertWithWhereUniqueWithoutProductInput";
import { Product_visibilityWhereUniqueInput } from "../inputs/Product_visibilityWhereUniqueInput";

@TypeGraphQL.InputType("Product_visibilityUpdateManyWithoutProductNestedInput", {})
export class Product_visibilityUpdateManyWithoutProductNestedInput {
  @TypeGraphQL.Field(_type => [Product_visibilityCreateWithoutProductInput], {
    nullable: true
  })
  create?: Product_visibilityCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_visibilityCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: Product_visibilityCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_visibilityUpsertWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  upsert?: Product_visibilityUpsertWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_visibilityCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: Product_visibilityCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_visibilityWhereUniqueInput], {
    nullable: true
  })
  set?: Product_visibilityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_visibilityWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Product_visibilityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_visibilityWhereUniqueInput], {
    nullable: true
  })
  delete?: Product_visibilityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_visibilityWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_visibilityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_visibilityUpdateWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  update?: Product_visibilityUpdateWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_visibilityUpdateManyWithWhereWithoutProductInput], {
    nullable: true
  })
  updateMany?: Product_visibilityUpdateManyWithWhereWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_visibilityScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_visibilityScalarWhereInput[] | undefined;
}
