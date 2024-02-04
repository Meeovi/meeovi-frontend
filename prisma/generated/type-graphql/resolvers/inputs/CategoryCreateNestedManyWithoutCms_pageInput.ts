import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateManyCms_pageInputEnvelope } from "../inputs/CategoryCreateManyCms_pageInputEnvelope";
import { CategoryCreateOrConnectWithoutCms_pageInput } from "../inputs/CategoryCreateOrConnectWithoutCms_pageInput";
import { CategoryCreateWithoutCms_pageInput } from "../inputs/CategoryCreateWithoutCms_pageInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryCreateNestedManyWithoutCms_pageInput", {})
export class CategoryCreateNestedManyWithoutCms_pageInput {
  @TypeGraphQL.Field(_type => [CategoryCreateWithoutCms_pageInput], {
    nullable: true
  })
  create?: CategoryCreateWithoutCms_pageInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryCreateOrConnectWithoutCms_pageInput], {
    nullable: true
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutCms_pageInput[] | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateManyCms_pageInputEnvelope, {
    nullable: true
  })
  createMany?: CategoryCreateManyCms_pageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true
  })
  connect?: CategoryWhereUniqueInput[] | undefined;
}
