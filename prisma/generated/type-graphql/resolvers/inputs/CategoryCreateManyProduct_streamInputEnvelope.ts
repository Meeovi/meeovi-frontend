import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateManyProduct_streamInput } from "../inputs/CategoryCreateManyProduct_streamInput";

@TypeGraphQL.InputType("CategoryCreateManyProduct_streamInputEnvelope", {})
export class CategoryCreateManyProduct_streamInputEnvelope {
  @TypeGraphQL.Field(_type => [CategoryCreateManyProduct_streamInput], {
    nullable: false
  })
  data!: CategoryCreateManyProduct_streamInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
