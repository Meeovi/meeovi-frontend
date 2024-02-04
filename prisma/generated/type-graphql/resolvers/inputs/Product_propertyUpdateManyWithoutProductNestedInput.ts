import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_propertyCreateManyProductInputEnvelope } from "../inputs/Product_propertyCreateManyProductInputEnvelope";
import { Product_propertyCreateOrConnectWithoutProductInput } from "../inputs/Product_propertyCreateOrConnectWithoutProductInput";
import { Product_propertyCreateWithoutProductInput } from "../inputs/Product_propertyCreateWithoutProductInput";
import { Product_propertyScalarWhereInput } from "../inputs/Product_propertyScalarWhereInput";
import { Product_propertyUpdateManyWithWhereWithoutProductInput } from "../inputs/Product_propertyUpdateManyWithWhereWithoutProductInput";
import { Product_propertyUpdateWithWhereUniqueWithoutProductInput } from "../inputs/Product_propertyUpdateWithWhereUniqueWithoutProductInput";
import { Product_propertyUpsertWithWhereUniqueWithoutProductInput } from "../inputs/Product_propertyUpsertWithWhereUniqueWithoutProductInput";
import { Product_propertyWhereUniqueInput } from "../inputs/Product_propertyWhereUniqueInput";

@TypeGraphQL.InputType("Product_propertyUpdateManyWithoutProductNestedInput", {})
export class Product_propertyUpdateManyWithoutProductNestedInput {
  @TypeGraphQL.Field(_type => [Product_propertyCreateWithoutProductInput], {
    nullable: true
  })
  create?: Product_propertyCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_propertyCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: Product_propertyCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_propertyUpsertWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  upsert?: Product_propertyUpsertWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_propertyCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: Product_propertyCreateManyProductInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Product_propertyUpdateWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  update?: Product_propertyUpdateWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_propertyUpdateManyWithWhereWithoutProductInput], {
    nullable: true
  })
  updateMany?: Product_propertyUpdateManyWithWhereWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_propertyScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_propertyScalarWhereInput[] | undefined;
}
