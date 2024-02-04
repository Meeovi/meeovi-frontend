import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateManyCategory_category_after_category_id_after_category_version_idTocategoryInput } from "../inputs/CategoryCreateManyCategory_category_after_category_id_after_category_version_idTocategoryInput";

@TypeGraphQL.InputType("CategoryCreateManyCategory_category_after_category_id_after_category_version_idTocategoryInputEnvelope", {})
export class CategoryCreateManyCategory_category_after_category_id_after_category_version_idTocategoryInputEnvelope {
  @TypeGraphQL.Field(_type => [CategoryCreateManyCategory_category_after_category_id_after_category_version_idTocategoryInput], {
    nullable: false
  })
  data!: CategoryCreateManyCategory_category_after_category_id_after_category_version_idTocategoryInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
