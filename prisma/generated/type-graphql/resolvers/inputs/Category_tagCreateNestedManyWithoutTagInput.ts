import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Category_tagCreateManyTagInputEnvelope } from "../inputs/Category_tagCreateManyTagInputEnvelope";
import { Category_tagCreateOrConnectWithoutTagInput } from "../inputs/Category_tagCreateOrConnectWithoutTagInput";
import { Category_tagCreateWithoutTagInput } from "../inputs/Category_tagCreateWithoutTagInput";
import { Category_tagWhereUniqueInput } from "../inputs/Category_tagWhereUniqueInput";

@TypeGraphQL.InputType("Category_tagCreateNestedManyWithoutTagInput", {})
export class Category_tagCreateNestedManyWithoutTagInput {
  @TypeGraphQL.Field(_type => [Category_tagCreateWithoutTagInput], {
    nullable: true
  })
  create?: Category_tagCreateWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [Category_tagCreateOrConnectWithoutTagInput], {
    nullable: true
  })
  connectOrCreate?: Category_tagCreateOrConnectWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => Category_tagCreateManyTagInputEnvelope, {
    nullable: true
  })
  createMany?: Category_tagCreateManyTagInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Category_tagWhereUniqueInput], {
    nullable: true
  })
  connect?: Category_tagWhereUniqueInput[] | undefined;
}
