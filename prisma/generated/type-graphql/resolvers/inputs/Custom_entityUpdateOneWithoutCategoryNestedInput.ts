import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_entityCreateOrConnectWithoutCategoryInput } from "../inputs/Custom_entityCreateOrConnectWithoutCategoryInput";
import { Custom_entityCreateWithoutCategoryInput } from "../inputs/Custom_entityCreateWithoutCategoryInput";
import { Custom_entityUpdateToOneWithWhereWithoutCategoryInput } from "../inputs/Custom_entityUpdateToOneWithWhereWithoutCategoryInput";
import { Custom_entityUpsertWithoutCategoryInput } from "../inputs/Custom_entityUpsertWithoutCategoryInput";
import { Custom_entityWhereInput } from "../inputs/Custom_entityWhereInput";
import { Custom_entityWhereUniqueInput } from "../inputs/Custom_entityWhereUniqueInput";

@TypeGraphQL.InputType("Custom_entityUpdateOneWithoutCategoryNestedInput", {})
export class Custom_entityUpdateOneWithoutCategoryNestedInput {
  @TypeGraphQL.Field(_type => Custom_entityCreateWithoutCategoryInput, {
    nullable: true
  })
  create?: Custom_entityCreateWithoutCategoryInput | undefined;

  @TypeGraphQL.Field(_type => Custom_entityCreateOrConnectWithoutCategoryInput, {
    nullable: true
  })
  connectOrCreate?: Custom_entityCreateOrConnectWithoutCategoryInput | undefined;

  @TypeGraphQL.Field(_type => Custom_entityUpsertWithoutCategoryInput, {
    nullable: true
  })
  upsert?: Custom_entityUpsertWithoutCategoryInput | undefined;

  @TypeGraphQL.Field(_type => Custom_entityWhereInput, {
    nullable: true
  })
  disconnect?: Custom_entityWhereInput | undefined;

  @TypeGraphQL.Field(_type => Custom_entityWhereInput, {
    nullable: true
  })
  delete?: Custom_entityWhereInput | undefined;

  @TypeGraphQL.Field(_type => Custom_entityWhereUniqueInput, {
    nullable: true
  })
  connect?: Custom_entityWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Custom_entityUpdateToOneWithWhereWithoutCategoryInput, {
    nullable: true
  })
  update?: Custom_entityUpdateToOneWithWhereWithoutCategoryInput | undefined;
}
