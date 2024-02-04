import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_tagCreateManyTagInput } from "../inputs/Media_tagCreateManyTagInput";

@TypeGraphQL.InputType("Media_tagCreateManyTagInputEnvelope", {})
export class Media_tagCreateManyTagInputEnvelope {
  @TypeGraphQL.Field(_type => [Media_tagCreateManyTagInput], {
    nullable: false
  })
  data!: Media_tagCreateManyTagInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
