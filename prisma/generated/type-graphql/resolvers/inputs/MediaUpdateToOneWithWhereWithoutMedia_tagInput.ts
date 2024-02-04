import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaUpdateWithoutMedia_tagInput } from "../inputs/MediaUpdateWithoutMedia_tagInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpdateToOneWithWhereWithoutMedia_tagInput", {})
export class MediaUpdateToOneWithWhereWithoutMedia_tagInput {
  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpdateWithoutMedia_tagInput, {
    nullable: false
  })
  data!: MediaUpdateWithoutMedia_tagInput;
}
