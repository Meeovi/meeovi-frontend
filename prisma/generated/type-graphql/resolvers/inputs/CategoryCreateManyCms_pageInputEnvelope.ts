import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateManyCms_pageInput } from "../inputs/CategoryCreateManyCms_pageInput";

@TypeGraphQL.InputType("CategoryCreateManyCms_pageInputEnvelope", {})
export class CategoryCreateManyCms_pageInputEnvelope {
  @TypeGraphQL.Field(_type => [CategoryCreateManyCms_pageInput], {
    nullable: false
  })
  data!: CategoryCreateManyCms_pageInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
