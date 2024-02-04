import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateWithoutProduct_streamInput } from "../inputs/CategoryCreateWithoutProduct_streamInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryCreateOrConnectWithoutProduct_streamInput", {})
export class CategoryCreateOrConnectWithoutProduct_streamInput {
  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: false
  })
  where!: CategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoryCreateWithoutProduct_streamInput, {
    nullable: false
  })
  create!: CategoryCreateWithoutProduct_streamInput;
}
