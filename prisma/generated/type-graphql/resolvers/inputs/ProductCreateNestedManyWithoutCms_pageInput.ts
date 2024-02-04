import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateManyCms_pageInputEnvelope } from "../inputs/ProductCreateManyCms_pageInputEnvelope";
import { ProductCreateOrConnectWithoutCms_pageInput } from "../inputs/ProductCreateOrConnectWithoutCms_pageInput";
import { ProductCreateWithoutCms_pageInput } from "../inputs/ProductCreateWithoutCms_pageInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateNestedManyWithoutCms_pageInput", {})
export class ProductCreateNestedManyWithoutCms_pageInput {
  @TypeGraphQL.Field(_type => [ProductCreateWithoutCms_pageInput], {
    nullable: true
  })
  create?: ProductCreateWithoutCms_pageInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutCms_pageInput], {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutCms_pageInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductCreateManyCms_pageInputEnvelope, {
    nullable: true
  })
  createMany?: ProductCreateManyCms_pageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  connect?: ProductWhereUniqueInput[] | undefined;
}
