import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Main_categoryCreateWithoutProductInput } from "../inputs/Main_categoryCreateWithoutProductInput";
import { Main_categoryUpdateWithoutProductInput } from "../inputs/Main_categoryUpdateWithoutProductInput";
import { Main_categoryWhereUniqueInput } from "../inputs/Main_categoryWhereUniqueInput";

@TypeGraphQL.InputType("Main_categoryUpsertWithWhereUniqueWithoutProductInput", {})
export class Main_categoryUpsertWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => Main_categoryWhereUniqueInput, {
    nullable: false
  })
  where!: Main_categoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => Main_categoryUpdateWithoutProductInput, {
    nullable: false
  })
  update!: Main_categoryUpdateWithoutProductInput;

  @TypeGraphQL.Field(_type => Main_categoryCreateWithoutProductInput, {
    nullable: false
  })
  create!: Main_categoryCreateWithoutProductInput;
}
