import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateManyUnitInputEnvelope } from "../inputs/ProductCreateManyUnitInputEnvelope";
import { ProductCreateOrConnectWithoutUnitInput } from "../inputs/ProductCreateOrConnectWithoutUnitInput";
import { ProductCreateWithoutUnitInput } from "../inputs/ProductCreateWithoutUnitInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateNestedManyWithoutUnitInput", {})
export class ProductCreateNestedManyWithoutUnitInput {
  @TypeGraphQL.Field(_type => [ProductCreateWithoutUnitInput], {
    nullable: true
  })
  create?: ProductCreateWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutUnitInput], {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductCreateManyUnitInputEnvelope, {
    nullable: true
  })
  createMany?: ProductCreateManyUnitInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  connect?: ProductWhereUniqueInput[] | undefined;
}
