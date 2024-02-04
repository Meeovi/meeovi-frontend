import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryUpdateWithoutProduct_streamInput } from "../inputs/CategoryUpdateWithoutProduct_streamInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryUpdateWithWhereUniqueWithoutProduct_streamInput", {})
export class CategoryUpdateWithWhereUniqueWithoutProduct_streamInput {
  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: false
  })
  where!: CategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoryUpdateWithoutProduct_streamInput, {
    nullable: false
  })
  data!: CategoryUpdateWithoutProduct_streamInput;
}
