import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateManyProduct_feature_setInputEnvelope } from "../inputs/ProductCreateManyProduct_feature_setInputEnvelope";
import { ProductCreateOrConnectWithoutProduct_feature_setInput } from "../inputs/ProductCreateOrConnectWithoutProduct_feature_setInput";
import { ProductCreateWithoutProduct_feature_setInput } from "../inputs/ProductCreateWithoutProduct_feature_setInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateNestedManyWithoutProduct_feature_setInput", {})
export class ProductCreateNestedManyWithoutProduct_feature_setInput {
  @TypeGraphQL.Field(_type => [ProductCreateWithoutProduct_feature_setInput], {
    nullable: true
  })
  create?: ProductCreateWithoutProduct_feature_setInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutProduct_feature_setInput], {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutProduct_feature_setInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductCreateManyProduct_feature_setInputEnvelope, {
    nullable: true
  })
  createMany?: ProductCreateManyProduct_feature_setInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  connect?: ProductWhereUniqueInput[] | undefined;
}
