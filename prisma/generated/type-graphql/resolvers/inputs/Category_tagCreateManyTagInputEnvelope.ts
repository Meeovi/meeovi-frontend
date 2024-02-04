import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Category_tagCreateManyTagInput } from "../inputs/Category_tagCreateManyTagInput";

@TypeGraphQL.InputType("Category_tagCreateManyTagInputEnvelope", {})
export class Category_tagCreateManyTagInputEnvelope {
  @TypeGraphQL.Field(_type => [Category_tagCreateManyTagInput], {
    nullable: false
  })
  data!: Category_tagCreateManyTagInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
