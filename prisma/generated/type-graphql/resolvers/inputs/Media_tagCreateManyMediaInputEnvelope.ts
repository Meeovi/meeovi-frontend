import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_tagCreateManyMediaInput } from "../inputs/Media_tagCreateManyMediaInput";

@TypeGraphQL.InputType("Media_tagCreateManyMediaInputEnvelope", {})
export class Media_tagCreateManyMediaInputEnvelope {
  @TypeGraphQL.Field(_type => [Media_tagCreateManyMediaInput], {
    nullable: false
  })
  data!: Media_tagCreateManyMediaInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
