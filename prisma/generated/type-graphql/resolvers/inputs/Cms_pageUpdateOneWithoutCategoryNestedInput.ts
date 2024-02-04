import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_pageCreateOrConnectWithoutCategoryInput } from "../inputs/Cms_pageCreateOrConnectWithoutCategoryInput";
import { Cms_pageCreateWithoutCategoryInput } from "../inputs/Cms_pageCreateWithoutCategoryInput";
import { Cms_pageUpdateToOneWithWhereWithoutCategoryInput } from "../inputs/Cms_pageUpdateToOneWithWhereWithoutCategoryInput";
import { Cms_pageUpsertWithoutCategoryInput } from "../inputs/Cms_pageUpsertWithoutCategoryInput";
import { Cms_pageWhereInput } from "../inputs/Cms_pageWhereInput";
import { Cms_pageWhereUniqueInput } from "../inputs/Cms_pageWhereUniqueInput";

@TypeGraphQL.InputType("Cms_pageUpdateOneWithoutCategoryNestedInput", {})
export class Cms_pageUpdateOneWithoutCategoryNestedInput {
  @TypeGraphQL.Field(_type => Cms_pageCreateWithoutCategoryInput, {
    nullable: true
  })
  create?: Cms_pageCreateWithoutCategoryInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageCreateOrConnectWithoutCategoryInput, {
    nullable: true
  })
  connectOrCreate?: Cms_pageCreateOrConnectWithoutCategoryInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageUpsertWithoutCategoryInput, {
    nullable: true
  })
  upsert?: Cms_pageUpsertWithoutCategoryInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageWhereInput, {
    nullable: true
  })
  disconnect?: Cms_pageWhereInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageWhereInput, {
    nullable: true
  })
  delete?: Cms_pageWhereInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageWhereUniqueInput, {
    nullable: true
  })
  connect?: Cms_pageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageUpdateToOneWithWhereWithoutCategoryInput, {
    nullable: true
  })
  update?: Cms_pageUpdateToOneWithWhereWithoutCategoryInput | undefined;
}
